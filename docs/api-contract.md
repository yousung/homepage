# API Contract

Base URL: `http://localhost:3001/api`

---

## GET /api/health

Health check endpoint.

**Response 200**

```json
{
  "status": "ok",
  "time": "2026-05-04T12:00:00.000Z"
}
```

---

## POST /api/contacts

Submit a contact form.

**Request Headers**

```
Content-Type: application/json
```

**Request Body**

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `name` | string | yes | 1–100 characters |
| `email` | string | yes | Valid RFC 5322 email |
| `company` | string | no | 0–100 characters |
| `message` | string | yes | 1–5000 characters |

**Example Request**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "ACME Corp",
  "message": "Hello, I'd like to get in touch."
}
```

**Response 200 — Success**

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "createdAt": "2026-05-04T12:00:00.000Z"
}
```

**Response 400 — Validation Error**

```json
{
  "statusCode": 400,
  "message": ["email must be an email", "message should not be empty"],
  "error": "Bad Request"
}
```

**Response 500 — Server Error**

```json
{
  "statusCode": 500,
  "message": "Failed to save contact"
}
```

> Stack traces are never exposed to clients. Server errors are logged server-side only.

---

## DynamoDB Schema

Table: `lov-contacts`

| Attribute | Type | Description |
|-----------|------|-------------|
| `id` | String (PK) | UUID v4 |
| `name` | String | Submitter name |
| `email` | String | Submitter email |
| `company` | String? | Optional company |
| `message` | String | Message body |
| `createdAt` | String | ISO 8601 timestamp |

---

## curl Examples

```bash
# Health check
curl http://localhost:3001/api/health

# Submit contact
curl -X POST http://localhost:3001/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane","email":"jane@example.com","message":"Hello!"}'

# Submit with company
curl -X POST http://localhost:3001/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane","email":"jane@example.com","company":"ACME","message":"Hello!"}'

# Validation error (missing required field)
curl -X POST http://localhost:3001/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane","email":"not-an-email","message":""}'
```
