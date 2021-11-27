from django.apps import AppConfig

from backend.config.settings import DEFAULT_AUTO_FIELD


class ImagesConfig(AppConfig):
    default_auto_fields = 'django.db.models.BigAutoField'
    name = 'apps.images'
