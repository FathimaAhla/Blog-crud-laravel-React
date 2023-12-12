 import { Component } from "react";
 import { createRoot } from "react-dom/client"; //root element
 import React from 'react';
 import { HashRouter, Routes, Route } from "react-router-dom";
 import Create from "./pages/Create";
 //export const BASE_URL = 'http://127.0.0.1:8000';

 class App extends Component {
    render(){
        return  <HashRouter>
                    <Routes>
                        <Route path="/" element={<h3>List Page Works</h3>} />
                        <Route path="/create" element={<Create/>} />
                        <Route path="/edit/:id" element={<h3>Edit Page Works</h3>} />
                    </Routes>
                </HashRouter>
    }
 }

 const root = createRoot(document.getElementById('app'));
 root.render(<App/>)
