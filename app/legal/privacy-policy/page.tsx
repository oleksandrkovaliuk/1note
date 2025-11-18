export const dynamic = 'force-static';

export default function PrivacyPolicy() {
	return (
		<div className="flex flex-col max-w-3xl mx-auto py-12 px-6">
			<h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

			<p className="mb-6">
				Your privacy is important to us. This policy explains how we collect, use, and protect your
				personal information.
			</p>

			<h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
			<p className="mb-6">
				We collect information you provide directly, such as when creating an account or contacting
				support. We may also collect data automatically through cookies and analytics tools.
			</p>

			<h2 className="text-2xl font-semibold mb-4">Use of Information</h2>
			<p className="mb-6">
				We use your information to provide and improve our services, communicate with you, and
				ensure the security of our platform.
			</p>

			<h2 className="text-2xl font-semibold mb-4">Sharing of Information</h2>
			<p className="mb-6">
				We do not sell your personal information. We may share it with trusted third parties to
				operate our services, comply with the law, or protect our rights.
			</p>

			<h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
			<p>
				You have the right to access, update, or delete your information. You can also opt out of
				certain data collection methods like cookies.
			</p>
		</div>
	);
}
