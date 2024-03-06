"""
WSGI config for barbers project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/
"""

import os
import sys

from django.core.wsgi import get_wsgi_application
sys.path.append('/home/dj_back/')
sys.path.append('/home/dj_back/barbers/')

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'barbers.settings')

application = get_wsgi_application()
