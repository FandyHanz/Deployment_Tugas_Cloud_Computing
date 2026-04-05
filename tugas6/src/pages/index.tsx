import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const owner = process.env.NEXT_PUBLIC_APP_OWNER || "Mahasiswa Polinema";

export default function Home() {
  return (
  <div>
    <h1>Tugas 6 Cloud Computing</h1>
    <p>Owner: {owner}</p>
  </div>
)
}
