# Generated by Django 2.1.7 on 2019-03-23 10:42

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('sampapi', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='posts',
            name='ingest_time',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
