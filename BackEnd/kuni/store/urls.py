from rest_framework import routers
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PaintingsViewSet, HexagramsViewSet, ArtEssayViewSet

router = routers.DefaultRouter()
router.register(r'paintings', PaintingsViewSet, basename='paintings')
router.register(r'hexagrams', HexagramsViewSet, basename='hexagrams')
router.register(r'artessay', ArtEssayViewSet, basename='artessay')

urlpatterns = [
  path('', include(router.urls)),
]


