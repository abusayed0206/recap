export const Scripts = () => {
	const googleAnalytics = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());`;
	return (
		<>
			<script async src={`https://ping.hashnode.com/gtag/js?id=#`} />
			<script dangerouslySetInnerHTML={{ __html: googleAnalytics }} />
		</>
	);
};
