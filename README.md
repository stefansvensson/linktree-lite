# Linktree-lite

A minimal, customizable personal link page.

## Customization

Edit `config.js` to customize:
- Personal information (name, title, email)
- Description and company
- Social links

## Local Development

Open `index.html` in a browser or serve with a local web server:

```bash
python3 -m http.server 8000
```

## Docker

Build and run:

```bash
docker build -t linktree-lite .
docker run -p 8080:80 linktree-lite
```

Visit `http://localhost:8080`

