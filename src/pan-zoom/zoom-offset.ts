/**
 *
 */

import Vector from 'vector/type/vector';
import worldCoordinates from './world-coordinates';
import transformation from './transformation';
import { divide } from 'vector';
import { subtract } from 'vector';

type T = (screenSize: Vector) => (worldSize: Vector) => (pan: Vector) => (previousZoom: number) => (newZoom: number) => (origin: Vector) => Vector;

const f: T = screenSize => worldSize => pan => previousZoom => newZoom => origin => {
    const preWorldCoordinates = worldCoordinates
        (transformation (screenSize) (worldSize) (pan) (previousZoom))
        (divide (previousZoom) (origin));

    const postWorldCoordinates = worldCoordinates
        (transformation (screenSize) (worldSize) (pan) (newZoom))
        (divide (newZoom) (origin));

    return subtract (postWorldCoordinates) (preWorldCoordinates);
};

export default f;
