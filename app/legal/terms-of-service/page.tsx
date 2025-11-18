export const dynamic = 'force-static';

export default function TermsOfService() {
	return (
		<div className="flex flex-col max-w-3xl mx-auto py-12 px-6">
			<h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

			<p className="mb-4">
				Welcome to our application. By accessing or using our services, you agree to be bound by
				these Terms of Service.
			</p>
			<h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
			<p className="mb-4">
				By using our services, you acknowledge that you have read, understood, and agree to these
				terms.
			</p>
			<h2 className="text-2xl font-semibold mt-8 mb-4">2. Modifications</h2>
			<p className="mb-4">
				We reserve the right to update these terms at any time. Changes will be effective
				immediately upon posting.
			</p>
			<h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
			<p className="mb-4">
				You are responsible for your use of our services and for ensuring that your activities
				comply with applicable laws.
			</p>
			<h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
			<p className="mb-4">
				We are not liable for any damages resulting from your use of our services.
			</p>
			<h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
			<p>If you have any questions about these Terms, please contact us at support@example.com.</p>
		</div>
	);
}
