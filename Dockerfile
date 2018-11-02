FROM python:3.6


WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt

ENV FLASK_ENV="docker"

ENV FLASK_APP='run.py'
