from django.db import models

# Create your models here.
class Posts(models.Model):
    # song title
    title = models.CharField(max_length=255, null=False)
    # name of artist or group/band
    description = models.CharField(max_length=15000, null=False)
    url = models.CharField(max_length=15000, null=False)
    img_link= models.CharField(max_length=15000, null=False)
    source = models.CharField(max_length=255, null=False)
    ingest_time=models.DateTimeField(auto_now_add=True)
    
    #title="", description="",url="",img_link="",source=""
    def __str__(self):
        return "{} - {}".format(self.title, self.source)
