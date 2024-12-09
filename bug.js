```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <Link href='/about' legacyBehavior>
      <a>About Us</a>
    </Link>
  );
}

// ... rest of the component code
```