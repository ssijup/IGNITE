# Generated by Django 4.1.5 on 2023-03-27 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0012_category_catewise_dicount_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='variantoptions',
            name='discount_price',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
