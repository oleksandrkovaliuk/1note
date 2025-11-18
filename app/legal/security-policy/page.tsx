export const dynamic = 'force-static';

export default function SecurityPolicy() {
	return (
		<div className="flex flex-col max-w-3xl mx-auto py-12 px-6">
			<h1 className="text-4xl font-bold mb-8">Security Policy</h1>

			<p className="mb-6">
				We are committed to protecting your data and ensuring the security of our platform. Our
				security practices are designed to maintain the confidentiality, integrity, and availability
				of your information.
			</p>

			<h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
			<p className="mb-6">
				All sensitive data is encrypted at rest and in transit. We follow industry best practices to
				prevent unauthorized access to our systems.
			</p>

			<h2 className="text-2xl font-semibold mb-4">Access Control</h2>
			<p className="mb-6">
				Only authorized personnel have access to critical infrastructure. Access is regularly
				reviewed and revoked immediately when no longer needed.
			</p>

			<h2 className="text-2xl font-semibold mb-4">Vulnerability Management</h2>
			<p className="mb-6">
				We routinely monitor, test, and update our systems to protect against vulnerabilities.
				Security patches are applied promptly after release.
			</p>

			<h2 className="text-2xl font-semibold mb-4">Incident Response</h2>
			<p>
				In case of a security incident, we have an established response plan to minimize impact and
				notify affected users as required.
			</p>
		</div>
	);
}
