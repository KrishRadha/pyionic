from rest_framework import generics
from .models import Posts
from .serializers import PostsSerializer
from rest_framework import filters
from rest_framework.pagination import LimitOffsetPagination

class LargeResultsSetPagination(LimitOffsetPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 2
    default_limit=2

class ListPostsView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    #queryset = Posts.objects.all()
    filter_backends = ()
    queryset=Posts.objects.all()
    serializer_class = PostsSerializer
    pagination_class =LargeResultsSetPagination# LimitOffsetPagination
