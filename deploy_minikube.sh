#!/bin/bash
echo "🐳 Setting up Minikube Docker Env..."
eval $(minikube docker-env)

echo "🔨 Building Backend Image..."
docker build -t local/backend:latest ./backend

echo "🔨 Building Frontend Image..."
docker build -t local/frontend:latest ./frontend

echo "✅ Images built successfully in Minikube!"
echo "🚀 Applying Kubernetes manifests..."
kubectl apply -f kubernetes/

echo "⏳ Waiting for rollout..."
kubectl rollout status deployment/backend
kubectl rollout status deployment/frontend

echo "🌍 Service URL:"
minikube service frontend --url
