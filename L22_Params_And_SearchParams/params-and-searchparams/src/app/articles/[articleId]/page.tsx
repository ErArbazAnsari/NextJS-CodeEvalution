"use client"
import Link from 'next/link'
import React, { use } from 'react'

function NewsArticle({ params, searchParams }: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" } | "es" | "fr">
}) {
    const { articleId } = use(params);
    const { lang = "en" } = use(searchParams);
    return (
        <div>
            <h1>New Article id - {articleId}</h1>
            <p>Reading in Language - {lang}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
    )
}

export default NewsArticle