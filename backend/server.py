from fastapi import FastAPI, APIRouter, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI(title="Arabic Graphic Designer Portfolio API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Models
class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    category: str
    image: str
    tags: List[str]
    status: str = "مكتمل"
    client: str
    year: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectCreate(BaseModel):
    title: str
    description: str
    category: str
    image: str
    tags: List[str]
    client: str
    year: str

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    status: str = "new"
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class SiteConfig(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    designer_name: str
    email: EmailStr
    phone: str
    location: str
    specializations: List[str]
    experience: str
    projects_completed: str
    clients_satisfied: str
    social_links: dict
    updated_at: datetime = Field(default_factory=datetime.utcnow)


# Initialize default data
async def init_default_data():
    """Initialize database with default data if empty"""
    
    # Check if projects exist
    projects_count = await db.projects.count_documents({})
    if projects_count == 0:
        default_projects = [
            {
                "id": str(uuid.uuid4()),
                "title": "هوية بصرية لمطعم راقي",
                "description": "تصميم هوية بصرية متكاملة لمطعم راقي تشمل الشعار، القوائم، والمواد التسويقية",
                "category": "الهوية البصرية",
                "image": "https://via.placeholder.com/400x300/0a1535/d3af35?text=Restaurant+Brand",
                "tags": ["شعار", "هوية بصرية", "مطبوعات"],
                "status": "مكتمل",
                "client": "مطعم الأصالة",
                "year": "2024",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "حملة تسويقية لوسائل التواصل",
                "description": "تصميم مجموعة من المنشورات الإبداعية لحملة تسويقية على وسائل التواصل الاجتماعي",
                "category": "وسائل التواصل",
                "image": "https://via.placeholder.com/400x300/0d46ba/ffffff?text=Social+Media+Campaign",
                "tags": ["انستغرام", "فيسبوك", "تسويق رقمي"],
                "status": "مكتمل",
                "client": "شركة التسويق الرقمي",
                "year": "2024",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "تصميم شعار وهوية تجارية",
                "description": "إنشاء شعار مميز وهوية بصرية كاملة لشركة تقنية ناشئة",
                "category": "الهوية البصرية",
                "image": "https://via.placeholder.com/400x300/d3af35/0a1535?text=Tech+Logo+Design",
                "tags": ["شعار", "هوية تجارية", "تقنية"],
                "status": "مكتمل",
                "client": "شركة التقنية المتقدمة",
                "year": "2023",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "منشورات إبداعية لمتجر أزياء",
                "description": "سلسلة من المنشورات الإبداعية والجذابة لعرض مجموعة أزياء جديدة",
                "category": "وسائل التواصل",
                "image": "https://via.placeholder.com/400x300/0a1535/d3af35?text=Fashion+Posts",
                "tags": ["أزياء", "تصوير المنتجات", "تصميم إعلاني"],
                "status": "مكتمل",
                "client": "متجر الأناقة",
                "year": "2024",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "تصميم كتالوج منتجات",
                "description": "تصميم كتالوج أنيق وجذاب لعرض مجموعة منتجات شركة تجميل",
                "category": "مطبوعات",
                "image": "https://via.placeholder.com/400x300/0d46ba/ffffff?text=Product+Catalog",
                "tags": ["كتالوج", "تجميل", "مطبوعات"],
                "status": "مكتمل",
                "client": "شركة الجمال الطبيعي",
                "year": "2023",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "هوية بصرية لمقهى عصري",
                "description": "تطوير هوية بصرية شاملة لمقهى عصري تشمل التصميم الداخلي والخارجي",
                "category": "الهوية البصرية",
                "image": "https://via.placeholder.com/400x300/d3af35/0a1535?text=Cafe+Branding",
                "tags": ["مقهى", "تصميم داخلي", "علامة تجارية"],
                "status": "مكتمل",
                "client": "مقهى الإبداع",
                "year": "2024",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            }
        ]
        await db.projects.insert_many(default_projects)
        logger.info("Default projects inserted")
    
    # Check if site config exists
    config_count = await db.site_config.count_documents({})
    if config_count == 0:
        default_config = {
            "id": str(uuid.uuid4()),
            "designer_name": "محمد أحمد - مصمم جرافيك",
            "email": "designer@example.com",
            "phone": "+966 50 123 4567",
            "location": "الرياض، المملكة العربية السعودية",
            "specializations": [
                "تصميم الهوية البصرية",
                "تصميم وسائل التواصل الاجتماعي",
                "التصميم الإعلاني",
                "تصميم المطبوعات"
            ],
            "experience": "5+ سنوات",
            "projects_completed": "200+",
            "clients_satisfied": "150+",
            "social_links": {
                "instagram": "https://instagram.com/designer",
                "twitter": "https://twitter.com/designer",
                "linkedin": "https://linkedin.com/in/designer",
                "facebook": "https://facebook.com/designer",
                "behance": "https://behance.net/designer",
                "dribbble": "https://dribbble.com/designer"
            },
            "updated_at": datetime.utcnow()
        }
        await db.site_config.insert_one(default_config)
        logger.info("Default site config inserted")


# API Routes
@api_router.get("/")
async def root():
    return {"message": "Arabic Graphic Designer Portfolio API"}

@api_router.get("/projects", response_model=List[Project])
async def get_projects(category: Optional[str] = Query(None)):
    """Get all projects or filter by category"""
    try:
        query = {}
        if category and category != "الكل":
            query["category"] = category
        
        projects = await db.projects.find(query).sort("created_at", -1).to_list(1000)
        return [Project(**project) for project in projects]
    except Exception as e:
        logger.error(f"Error fetching projects: {e}")
        raise HTTPException(status_code=500, detail="خطأ في جلب المشاريع")

@api_router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Get single project by ID"""
    try:
        project = await db.projects.find_one({"id": project_id})
        if not project:
            raise HTTPException(status_code=404, detail="المشروع غير موجود")
        return Project(**project)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching project: {e}")
        raise HTTPException(status_code=500, detail="خطأ في جलب المشروع")

@api_router.get("/categories")
async def get_categories():
    """Get available project categories"""
    try:
        categories = await db.projects.distinct("category")
        return {"categories": ["الكل"] + categories}
    except Exception as e:
        logger.error(f"Error fetching categories: {e}")
        raise HTTPException(status_code=500, detail="خطأ في جلب الفئات")

@api_router.post("/contact")
async def submit_contact_form(contact_data: ContactMessageCreate):
    """Submit contact form"""
    try:
        contact_message = ContactMessage(**contact_data.dict())
        await db.contact_messages.insert_one(contact_message.dict())
        return {
            "success": True,
            "message": "تم إرسال الرسالة بنجاح! سنقوم بالرد عليك في أقرب وقت ممكن."
        }
    except Exception as e:
        logger.error(f"Error submitting contact form: {e}")
        raise HTTPException(status_code=500, detail="خطأ في إرسال الرسالة")

@api_router.get("/config", response_model=SiteConfig)
async def get_site_config():
    """Get site configuration"""
    try:
        config = await db.site_config.find_one()
        if not config:
            raise HTTPException(status_code=404, detail="إعدادات الموقع غير موجودة")
        return SiteConfig(**config)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching site config: {e}")
        raise HTTPException(status_code=500, detail="خطأ في جلب إعدادات الموقع")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    await init_default_data()
    logger.info("Portfolio API started successfully")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
