# Generated by Django 3.2.12 on 2023-11-15 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0006_watch_quantity_available'),
    ]

    operations = [
        migrations.AlterField(
            model_name='watch',
            name='quantity_available',
            field=models.IntegerField(default=5),
        ),
    ]
