#!/usr/bin/env python3
"""
Comprehensive Backend API Testing for Arabic Graphic Designer Portfolio
Tests all endpoints with Arabic content and validates database operations
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Backend URL from frontend/.env
BACKEND_URL = "https://6d74dfd7-953f-4a2c-87e3-ae6262e70d0b.preview.emergentagent.com/api"

class BackendTester:
    def __init__(self):
        self.passed_tests = 0
        self.failed_tests = 0
        self.test_results = []
        
    def log_test(self, test_name, passed, message="", response_data=None):
        """Log test result"""
        status = "✅ PASS" if passed else "❌ FAIL"
        print(f"{status}: {test_name}")
        if message:
            print(f"   {message}")
        if response_data and not passed:
            print(f"   Response: {response_data}")
        print()
        
        self.test_results.append({
            "test": test_name,
            "passed": passed,
            "message": message,
            "response": response_data
        })
        
        if passed:
            self.passed_tests += 1
        else:
            self.failed_tests += 1
    
    def test_api_root(self):
        """Test API root endpoint"""
        try:
            response = requests.get(f"{BACKEND_URL}/")
            if response.status_code == 200:
                data = response.json()
                if "message" in data:
                    self.log_test("API Root Endpoint", True, f"Message: {data['message']}")
                else:
                    self.log_test("API Root Endpoint", False, "Missing message in response", data)
            else:
                self.log_test("API Root Endpoint", False, f"Status code: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("API Root Endpoint", False, f"Exception: {str(e)}")
    
    def test_get_all_projects(self):
        """Test GET /api/projects - fetch all projects"""
        try:
            response = requests.get(f"{BACKEND_URL}/projects")
            if response.status_code == 200:
                projects = response.json()
                if isinstance(projects, list) and len(projects) > 0:
                    # Check if projects contain Arabic text
                    arabic_found = any("title" in p and any(ord(c) > 127 for c in p["title"]) for p in projects)
                    if arabic_found:
                        self.log_test("Get All Projects", True, f"Found {len(projects)} projects with Arabic content")
                    else:
                        self.log_test("Get All Projects", False, "No Arabic content found in projects")
                else:
                    self.log_test("Get All Projects", False, "No projects returned or invalid format", projects)
            else:
                self.log_test("Get All Projects", False, f"Status code: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Get All Projects", False, f"Exception: {str(e)}")
    
    def test_filter_projects_by_category(self):
        """Test GET /api/projects?category=الهوية البصرية - filter by Arabic category"""
        try:
            category = "الهوية البصرية"
            response = requests.get(f"{BACKEND_URL}/projects", params={"category": category})
            if response.status_code == 200:
                projects = response.json()
                if isinstance(projects, list):
                    # Check if all returned projects have the correct category
                    correct_category = all(p.get("category") == category for p in projects)
                    if correct_category and len(projects) > 0:
                        self.log_test("Filter Projects by Arabic Category (الهوية البصرية)", True, 
                                    f"Found {len(projects)} projects in category '{category}'")
                    elif len(projects) == 0:
                        self.log_test("Filter Projects by Arabic Category (الهوية البصرية)", False, 
                                    f"No projects found for category '{category}'")
                    else:
                        self.log_test("Filter Projects by Arabic Category (الهوية البصرية)", False, 
                                    "Some projects have incorrect category")
                else:
                    self.log_test("Filter Projects by Arabic Category (الهوية البصرية)", False, 
                                "Invalid response format", projects)
            else:
                self.log_test("Filter Projects by Arabic Category (الهوية البصرية)", False, 
                            f"Status code: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Filter Projects by Arabic Category (الهوية البصرية)", False, f"Exception: {str(e)}")
    
    def test_filter_projects_social_media(self):
        """Test GET /api/projects?category=وسائل التواصل - filter by another category"""
        try:
            category = "وسائل التواصل"
            response = requests.get(f"{BACKEND_URL}/projects", params={"category": category})
            if response.status_code == 200:
                projects = response.json()
                if isinstance(projects, list):
                    correct_category = all(p.get("category") == category for p in projects)
                    if correct_category and len(projects) > 0:
                        self.log_test("Filter Projects by Arabic Category (وسائل التواصل)", True, 
                                    f"Found {len(projects)} projects in category '{category}'")
                    elif len(projects) == 0:
                        self.log_test("Filter Projects by Arabic Category (وسائل التواصل)", False, 
                                    f"No projects found for category '{category}'")
                    else:
                        self.log_test("Filter Projects by Arabic Category (وسائل التواصل)", False, 
                                    "Some projects have incorrect category")
                else:
                    self.log_test("Filter Projects by Arabic Category (وسائل التواصل)", False, 
                                "Invalid response format", projects)
            else:
                self.log_test("Filter Projects by Arabic Category (وسائل التواصل)", False, 
                            f"Status code: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Filter Projects by Arabic Category (وسائل التواصل)", False, f"Exception: {str(e)}")
    
    def test_get_single_project(self):
        """Test GET /api/projects/{project_id} - get single project"""
        try:
            # First get all projects to get a valid ID
            response = requests.get(f"{BACKEND_URL}/projects")
            if response.status_code == 200:
                projects = response.json()
                if projects and len(projects) > 0:
                    project_id = projects[0]["id"]
                    
                    # Now test getting single project
                    single_response = requests.get(f"{BACKEND_URL}/projects/{project_id}")
                    if single_response.status_code == 200:
                        project = single_response.json()
                        if project.get("id") == project_id:
                            self.log_test("Get Single Project", True, 
                                        f"Successfully retrieved project: {project.get('title', 'N/A')}")
                        else:
                            self.log_test("Get Single Project", False, "Project ID mismatch", project)
                    else:
                        self.log_test("Get Single Project", False, 
                                    f"Status code: {single_response.status_code}", single_response.text)
                else:
                    self.log_test("Get Single Project", False, "No projects available to test with")
            else:
                self.log_test("Get Single Project", False, "Could not fetch projects list for testing")
        except Exception as e:
            self.log_test("Get Single Project", False, f"Exception: {str(e)}")
    
    def test_get_nonexistent_project(self):
        """Test GET /api/projects/{invalid_id} - test 404 error handling"""
        try:
            fake_id = str(uuid.uuid4())
            response = requests.get(f"{BACKEND_URL}/projects/{fake_id}")
            if response.status_code == 404:
                self.log_test("Get Non-existent Project (404 Test)", True, "Correctly returned 404 for invalid project ID")
            else:
                self.log_test("Get Non-existent Project (404 Test)", False, 
                            f"Expected 404, got {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Get Non-existent Project (404 Test)", False, f"Exception: {str(e)}")
    
    def test_get_categories(self):
        """Test GET /api/categories - get available categories"""
        try:
            response = requests.get(f"{BACKEND_URL}/categories")
            if response.status_code == 200:
                data = response.json()
                if "categories" in data and isinstance(data["categories"], list):
                    categories = data["categories"]
                    # Check for Arabic categories
                    arabic_categories = [cat for cat in categories if any(ord(c) > 127 for c in cat)]
                    if len(arabic_categories) > 0:
                        self.log_test("Get Categories", True, 
                                    f"Found {len(categories)} categories including Arabic ones: {arabic_categories}")
                    else:
                        self.log_test("Get Categories", False, "No Arabic categories found", categories)
                else:
                    self.log_test("Get Categories", False, "Invalid response format", data)
            else:
                self.log_test("Get Categories", False, f"Status code: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Get Categories", False, f"Exception: {str(e)}")
    
    def test_contact_form_valid(self):
        """Test POST /api/contact - submit contact form with valid Arabic data"""
        try:
            contact_data = {
                "name": "أحمد محمد العلي",
                "email": "ahmed.ali@example.com",
                "subject": "استفسار عن خدمات التصميم",
                "message": "السلام عليكم، أرغب في الحصول على عرض سعر لتصميم هوية بصرية لشركتي الناشئة. الشركة تعمل في مجال التقنية المالية ونحتاج إلى تصميم شعار وهوية بصرية متكاملة تعكس طبيعة عملنا المبتكر."
            }
            
            response = requests.post(f"{BACKEND_URL}/contact", json=contact_data)
            if response.status_code == 200:
                result = response.json()
                if result.get("success") and "message" in result:
                    self.log_test("Contact Form Submission (Valid Arabic Data)", True, 
                                f"Success message: {result['message']}")
                else:
                    self.log_test("Contact Form Submission (Valid Arabic Data)", False, 
                                "Missing success flag or message", result)
            else:
                self.log_test("Contact Form Submission (Valid Arabic Data)", False, 
                            f"Status code: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Contact Form Submission (Valid Arabic Data)", False, f"Exception: {str(e)}")
    
    def test_contact_form_missing_fields(self):
        """Test POST /api/contact - test validation for required fields"""
        try:
            # Test with missing name
            incomplete_data = {
                "email": "test@example.com",
                "subject": "موضوع الرسالة",
                "message": "محتوى الرسالة"
            }
            
            response = requests.post(f"{BACKEND_URL}/contact", json=incomplete_data)
            if response.status_code == 422:  # FastAPI validation error
                self.log_test("Contact Form Validation (Missing Fields)", True, 
                            "Correctly rejected incomplete data with 422")
            else:
                self.log_test("Contact Form Validation (Missing Fields)", False, 
                            f"Expected 422, got {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Contact Form Validation (Missing Fields)", False, f"Exception: {str(e)}")
    
    def test_contact_form_invalid_email(self):
        """Test POST /api/contact - test email format validation"""
        try:
            invalid_email_data = {
                "name": "محمد أحمد",
                "email": "invalid-email-format",
                "subject": "موضوع الرسالة",
                "message": "محتوى الرسالة"
            }
            
            response = requests.post(f"{BACKEND_URL}/contact", json=invalid_email_data)
            if response.status_code == 422:  # FastAPI validation error
                self.log_test("Contact Form Email Validation", True, 
                            "Correctly rejected invalid email format with 422")
            else:
                self.log_test("Contact Form Email Validation", False, 
                            f"Expected 422, got {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Contact Form Email Validation", False, f"Exception: {str(e)}")
    
    def test_get_site_config(self):
        """Test GET /api/config - get site configuration"""
        try:
            response = requests.get(f"{BACKEND_URL}/config")
            if response.status_code == 200:
                config = response.json()
                required_fields = ["designer_name", "email", "phone", "location", "specializations"]
                missing_fields = [field for field in required_fields if field not in config]
                
                if not missing_fields:
                    # Check for Arabic content
                    arabic_found = any(any(ord(c) > 127 for c in str(config[field])) 
                                     for field in config if isinstance(config[field], str))
                    if arabic_found:
                        self.log_test("Get Site Configuration", True, 
                                    f"Configuration loaded with Arabic content. Designer: {config.get('designer_name', 'N/A')}")
                    else:
                        self.log_test("Get Site Configuration", False, "No Arabic content in configuration")
                else:
                    self.log_test("Get Site Configuration", False, f"Missing required fields: {missing_fields}")
            else:
                self.log_test("Get Site Configuration", False, f"Status code: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Get Site Configuration", False, f"Exception: {str(e)}")
    
    def test_malformed_requests(self):
        """Test malformed requests"""
        try:
            # Test malformed JSON
            response = requests.post(f"{BACKEND_URL}/contact", 
                                   data="invalid json data", 
                                   headers={"Content-Type": "application/json"})
            if response.status_code in [400, 422]:
                self.log_test("Malformed Request Handling", True, 
                            f"Correctly handled malformed JSON with status {response.status_code}")
            else:
                self.log_test("Malformed Request Handling", False, 
                            f"Expected 400/422, got {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Malformed Request Handling", False, f"Exception: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("=" * 80)
        print("ARABIC GRAPHIC DESIGNER PORTFOLIO - BACKEND API TESTING")
        print("=" * 80)
        print(f"Testing Backend URL: {BACKEND_URL}")
        print(f"Test Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("=" * 80)
        print()
        
        # Run all tests
        self.test_api_root()
        self.test_get_all_projects()
        self.test_filter_projects_by_category()
        self.test_filter_projects_social_media()
        self.test_get_single_project()
        self.test_get_nonexistent_project()
        self.test_get_categories()
        self.test_contact_form_valid()
        self.test_contact_form_missing_fields()
        self.test_contact_form_invalid_email()
        self.test_get_site_config()
        self.test_malformed_requests()
        
        # Print summary
        print("=" * 80)
        print("TEST SUMMARY")
        print("=" * 80)
        print(f"Total Tests: {self.passed_tests + self.failed_tests}")
        print(f"Passed: {self.passed_tests}")
        print(f"Failed: {self.failed_tests}")
        print(f"Success Rate: {(self.passed_tests / (self.passed_tests + self.failed_tests) * 100):.1f}%")
        print("=" * 80)
        
        if self.failed_tests > 0:
            print("\nFAILED TESTS:")
            for result in self.test_results:
                if not result["passed"]:
                    print(f"❌ {result['test']}: {result['message']}")
        
        return self.failed_tests == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)