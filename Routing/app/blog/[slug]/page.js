export default function BlogDetailPage({ params }) {
    return (
        <>
            <h1>Blog Detail Page</h1>
            <p>Blog slug: {params.slug}</p>
        </>
    );
}