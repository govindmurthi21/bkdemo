import React from 'react';
import axios from 'axios';

class MicroFrontend extends React.Component {
    mountMicroFrontendRetry = null;
    unmountMicroFrontendRetry = null;

    HOST_MAP = {
        MICROAPP1: {localhost: '//localhost:3001'},
        MICROAPP2: {localhost: '//localhost:3003'}
    };

    async componentDidMount() {
        const {name, document} = this.props;
        const scriptId = `microfrontend-script-${name}`;

        if(document.getElementById(scriptId)) {
            // this.mountMicroFrontend();
            return;
        }

        const host = `${window.location.protocol}${this.HOST_MAP[name.toUpperCase()].localhost}`;
        let manifest = null;
        try {
            const {data} = await axios.get(`${host}/asset-manifest.json`);
            manifest = data.files || data;
        } catch(err) {
            console.error(err);
            return;
        }
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest['main.js']}`;
        script.onload = this.mountMicroFrontend;

        if(manifest['main.css']) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = `${host}${manifest['main.css']}`;
            link.id = `${scriptId}-css`;

            document.head.appendChild(link);
        }

        document.head.appendChild(script);
    }

    componentWillUnmount() {
        const {name, document} = this.props;
        const scriptId = `microfrontend-script-${name}`;
        console.log("This is the script id " + scriptId);

        if(document.getElementById(scriptId)) {
            this.unmountMicroFrontend();
            return;
        }
    }

    mountMicroFrontend = () => {
        const {name, window, microProps} = this.props;
        const mountFunc = window[`mount${name}`];
        clearTimeout(this.mountMicroFrontendRetry);

        if(mountFunc) {
            mountFunc(`${name}-container`, microProps);
        } else {
            this.mountMicroFrontendRetry = setTimeout(this.mountMicroFrontend, 250);
        }
     }

     unmountMicroFrontend = () => {
        const {name, window} = this.props;
        const scriptId = `microfrontend-script-${name}`;
        const scriptElems = document.querySelectorAll(`#${scriptId}`);
        const linkElems = document.querySelectorAll(`#${scriptId}-css`);
        const unmountFunc = window[`unmount${name}`];
        clearTimeout(this.unmountMicroFrontendRetry);

        if(unmountFunc) {
            unmountFunc(`${name}-container`);
            console.log("Here");
            if(scriptElems.length > 0) {
                scriptElems.forEach((elem) => elem.remove());
            }
            if(linkElems.length > 0) {
                linkElems.forEach((elem) => elem.remove());
            }
        } else {
            this.unmountMicroFrontendRetry = setTimeout(this.unmountMicroFrontendRetry, 250);
        }
     }

     render() {
        return <div id={`${this.props.name}-container`} />;
     }
}

MicroFrontend.defaultProps = {window, document};

export default MicroFrontend;
