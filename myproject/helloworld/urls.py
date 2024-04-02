from django.conf import settings
from django.urls import path
from .views import hello_world
from  django.conf.urls.static import static #new

urlpatterns = [
    path('hello/', hello_world, name='hello_world'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_URL)


