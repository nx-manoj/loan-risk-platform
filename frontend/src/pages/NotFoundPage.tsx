import { Link } from "react-router-dom";

import { Button } from "../components/common/Button";
import { Card } from "../components/common/Card";

export const NotFoundPage = () => (
  <div className="mx-auto max-w-2xl py-16">
    <Card className="space-y-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-400">Error 404</p>
      <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
      <p className="text-slate-300">
        The requested page does not exist in the current frontend route map.
      </p>
      <Link to="/">
        <Button className="mt-2">Back to Dashboard</Button>
      </Link>
    </Card>
  </div>
);
