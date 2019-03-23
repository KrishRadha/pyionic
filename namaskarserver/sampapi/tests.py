from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Posts
from .serializers import PostsSerializer
# Create your tests here.

class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_post(title="", description="",url="",img_link="",source=""):
        if title!="" and description!="" and url!="" and img_link!="" and source!="":
            Posts.objects.create(title=title, description=description,url=url,img_link=img_link,source=source)

    def setUp(self):
        # add test data
        self.create_post("TITLE 1", "description 1","https://www.joshmorony.com/an-introduction-to-http-requests-fetching-data-in-ionic/","https://nrsc.gov.in/sites/default/files/inline-images/lidar-big.PNG","medium")
        self.create_post("TITLE 2", "description 2","https://www.joshmorony.com/an-introduction-to-http-requests-fetching-data-in-ionic/","https://nrsc.gov.in/sites/default/files/inline-images/lidar-big.PNG","medium")
        self.create_post("TITLE 3", "description 3","https://www.joshmorony.com/an-introduction-to-http-requests-fetching-data-in-ionic/","https://nrsc.gov.in/sites/default/files/inline-images/lidar-big.PNG","medium")
        self.create_post("TITLE 4", "description 4","https://www.joshmorony.com/an-introduction-to-http-requests-fetching-data-in-ionic/","https://nrsc.gov.in/sites/default/files/inline-images/lidar-big.PNG","medium")

class GetAllPostsTest(BaseViewTest):

    def test_get_all_posts(self):
        """
        This test ensures that all songs added in the setUp method
        exist when we make a GET request to the songs/ endpoint
        """
        # hit the API endpoint
        response = self.client.get(
            reverse("posts-all", kwargs={"version": "v1"})
        )
        # fetch the data from db
        expected = Posts.objects.all()
        serialized = PostsSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
