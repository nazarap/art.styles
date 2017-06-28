from django.conf.urls import url
from api import views as local_views

urlpatterns = [
    url(r'^user/login/$', local_views.LoginViewSet.as_view({'post': 'user_login'})),

    url(r'^subtypes/(?P<type_id>[0-9]+)/$', local_views.SubtypeViewSet.as_view({'get': 'get_subtypes_by_type_id'})),
    url(r'^subtypes/$', local_views.SubtypeViewSet.as_view({'post': 'get_subtypes_by_ids_list'})),
    url(r'^subtype/create/$', local_views.SubtypeViewSet.as_view({'post': 'create_new_subtype'})),

    url(r'^types/$', local_views.TypeViewSet.as_view({'get': 'get_types'})),
    url(r'^type/create/$', local_views.TypeViewSet.as_view({'post': 'create_new_type'})),

    url(r'^styles/filter/$', local_views.StyleViewSet.as_view({'post': 'get_styles_by_subtypes'})),
    url(r'^styles/search/$', local_views.StyleViewSet.as_view({'post': 'find_styles_by_name'})),
    url(r'^styles/$', local_views.StyleViewSet.as_view({'get': 'get_all_styles'})),
    url(r'^style/(?P<style_id>[0-9]+)/$', local_views.StyleViewSet.as_view({'get': 'get_style_by_id'})),
    url(r'^style/link/(?P<style_link>[\w_]+)/$', local_views.StyleViewSet.as_view({'get': 'get_style_by_link'})),
    url(r'^style/create/$', local_views.StyleViewSet.as_view({'post': 'create_new_style'})),
]
