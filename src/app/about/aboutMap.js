"use client";
import React from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function AboutMap() {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Map
        initialViewState={{
          longitude: 144.9631,
          latitude: -37.8136,
          zoom: 17,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      >
        <Marker longitude={144.9631} latitude={-37.8136}>
          📍
        </Marker>
      </Map>
    </div>
  );
}
