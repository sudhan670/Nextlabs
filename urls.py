from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AppViewSet, TaskViewSet, UserTaskViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register(r'apps', AppViewSet)
router.register(r'tasks', TaskViewSet)
router.register(r'my-tasks', UserTaskViewSet, basename='my-tasks')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
