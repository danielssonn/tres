const Presentation = () => {
  return (
    <div className="bg-white p-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Product Engineering Practice</h1>
        <p className="text-xl">Transforming Product Delivery Through Engineering Excellence</p>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Current State</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Deep subject matter expertise in product teams</li>
          <li>Fragmented delivery approaches</li>
          <li>Limited reusability across products</li>
          <li>High cost of maintenance</li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Product Engineering Vision</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold mb-2">Engineering Excellence</h3>
            <ul className="list-disc pl-4">
              <li>Unified Product Catalog</li>
              <li>Standardized Rule Engine</li>
              <li>Multi-experience Architecture</li>
              <li>Automated Testing & Deployment</li>
            </ul>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold mb-2">Operations Excellence</h3>
            <ul className="list-disc pl-4">
              <li>Product Lifecycle Management</li>
              <li>Version Control for Features</li>
              <li>Automated Compliance</li>
              <li>Performance Monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Implementation Roadmap</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold">Phase 1: Foundation (3 months)</h3>
            <p>Product Catalog, Basic Rule Engine</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold">Phase 2: Multi-experience (6 months)</h3>
            <p>Web, API, Conversational Interfaces</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold">Phase 3: Operations (3 months)</h3>
            <p>Monitoring, Analytics, Lifecycle Management</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Expected Benefits</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold mb-2">Business Impact</h3>
            <ul className="list-disc pl-4">
              <li>50% faster time-to-market</li>
              <li>30% reduction in maintenance costs</li>
              <li>Improved compliance adherence</li>
            </ul>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold mb-2">Technical Impact</h3>
            <ul className="list-disc pl-4">
              <li>Reusable product components</li>
              <li>Standardized delivery pipeline</li>
              <li>Reduced technical debt</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4">Resource Requirements</h2>
        <div className="p-4 border rounded">
          <ul className="list-disc pl-4">
            <li>Product Engineering Team (6-8 engineers)</li>
            <li>DevOps Infrastructure</li>
            <li>Training & Documentation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Presentation;