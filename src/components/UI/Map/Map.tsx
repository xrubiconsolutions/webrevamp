import React, { useMemo, useState, FC } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
import { Loader } from "../Loader/loader";

export const Map: FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBGv53NEoMm3uPyA9U45ibSl3pOlqkHWN8",
  });

  const center = useMemo(
    () => ({ lat: 6.504094110565859, lng: 3.351642855526162 }),
    []
  );

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-start h-[100%]">
        <Loader />
      </div>
    );
  }

  return (
    // @ts-ignore
    <GoogleMap
      zoom={17}
      center={{ lat: 6.504094110565859, lng: 3.351642855526162 }}
      mapContainerClassName="map-container"
      options={{ disableDefaultUI: true }}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
};
