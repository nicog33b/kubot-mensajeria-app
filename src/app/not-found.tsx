import { notFound } from 'next/navigation';
import React from 'react';

export default async function NotFound() {

    return(
        <section id='not-found' className='h-screen items-center'>
        <div className='flex justify-center m-6 p-3'>
        PAGINA NO ENCONTRADA.
        </div>
        </section>
    )
}
