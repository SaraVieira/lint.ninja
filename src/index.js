import './style';
import App from './components/app';
import { h, render } from 'preact';
import { default as renderToString } from 'preact-render-to-string';
import { ServerStyleSheet } from 'styled-components'

if(typeof window === undefined) {
    const sheet = new ServerStyleSheet()
    const html = renderToString(sheet.collectStyles(<App />))
    const styleTags = sheet.getStyleTags() // or sheet.getStyleElement()
}
if (typeof window !== "undefined") {
    render((
        <App />
    ), document.getElementById('root'));
}
