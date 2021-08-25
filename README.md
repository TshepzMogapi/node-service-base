# Basic set up for node service



# k8s
## local cluster using minikube 
_assuming installation of minikube,kubectl etc._
- minikube start
- kubectl create -f pod.yaml
- kubectl get pods
- kubectl port-forward node-email-app 3006:3006