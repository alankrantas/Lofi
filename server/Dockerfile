FROM python:3.8

WORKDIR /app

COPY ./server/requirements.txt /app/requirements.txt

RUN pip3 --no-cache-dir install -r requirements.txt

COPY ./server /app
COPY ./model /app/model
COPY ./checkpoints /app/checkpoints

EXPOSE 3000

CMD flask run -h 0.0.0.0 -p 3000
