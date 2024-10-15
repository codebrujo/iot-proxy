## Template for Node.js express applications written in TypeScript

### Development

```bash
npm run dev
npm run start:monitor
```

### Docker

#### Development

```bash
docker-compose up
```

#### Production

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```

### Running tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Building a container

```bash
docker build .
```
