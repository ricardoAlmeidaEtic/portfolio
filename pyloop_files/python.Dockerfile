FROM python:alpine

WORKDIR /usr/app/src/

COPY ./pyloop_files/src/backend/ /usr/app/src/

RUN pip install --no-cache-dir --upgrade -r /usr/app/src/requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]