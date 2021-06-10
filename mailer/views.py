from django.shortcuts import render
from django.views.generic import ListView

from .models import Company
from django.db.models import Count, Sum
# Create your views here.

class IndexView(ListView):
    template_name = "index.html"
    model = Company
    paginate_by = 100
    context_object_name = "companies"
    
    
    def get_queryset(self):
        
        query = Company.objects.all(
            ).annotate(cont=Count('orders'),order_sum=Sum('orders__total')
            ).prefetch_related('contacts','contacts__orders')
        
        return query