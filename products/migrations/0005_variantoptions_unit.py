# Generated by Django 4.1.5 on 2023-03-22 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_remove_variantoptions_unit'),
    ]

    operations = [
        migrations.AddField(
            model_name='variantoptions',
            name='unit',
            field=models.CharField(blank=True, max_length=5, null=True),
        ),
    ]
