from django.conf.urls import url
from api import views as local_views

urlpatterns = [
    url(r'^subtypes/(?P<type_id>[0-9]+)/$', local_views.SubtypeViewSet.as_view({'get': 'get_subtypes_by_type_id'})),

    url(r'^types/$', local_views.TypeViewSet.as_view({'get': 'get_types'})),
    url(r'^styles/filter/$', local_views.StyleViewSet.as_view({'post': 'get_style_by_subtypes'})),
]
