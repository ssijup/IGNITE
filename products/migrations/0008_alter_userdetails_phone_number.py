# Generated by Django 4.1.5 on 2023-03-24 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_alter_userdetails_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdetails',
            name='phone_number',
            field=models.PositiveBigIntegerField(default=1, unique=True),
        ),
    ]
