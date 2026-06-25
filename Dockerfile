FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt /app/requirements.txt

RUN python -c "import codecs; from pathlib import Path; p=Path('/app/requirements.txt'); raw=p.read_bytes(); text=raw.decode('utf-16') if raw.startswith((codecs.BOM_UTF16_LE, codecs.BOM_UTF16_BE)) else raw.decode('utf-8'); Path('/app/requirements.docker.txt').write_text(text, encoding='utf-8')" && \
    python -m pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r /app/requirements.docker.txt && \
    rm /app/requirements.docker.txt

COPY . /app

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
