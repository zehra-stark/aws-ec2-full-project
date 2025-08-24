# 🚀 AWS EC2 Full Project

This is a complete hands-on project to help you **master AWS EC2** from scratch, covering everything from launching basic instances to deploying a full, scalable, monitored cloud application.

By doing this project, you'll gain **practical knowledge** of EC2 and related services like EBS, AMIs, Load Balancing, Auto Scaling, and CloudWatch.

---

## 📸 Screenshots

Here are snapshots of the **Week 1 EC2-hosted Quiz Web App**:

![Quiz App](./images/01.png)
![Final Look](./images/02.png)

---

## ✅ Week-by-Week Progress

## ✅ Week 1 – Web App on EC2
- Launched an **Amazon Linux 2 EC2 instance**
- Installed **Apache HTTP Server**
- Created and deployed a simple **EC2 quiz web app** using HTML, CSS, and JS  

**Concepts Covered:**
- What is EC2? (History, meaning, real-world examples)
- Use cases: websites, applications, APIs, batch processing, etc.
- EC2 instance types and pricing models
- How to connect using SSH
- Hands-on with Amazon Linux 2 and Ubuntu instances  

---

## ✅ Week 2 – EBS, AMIs, and Security
- Created, attached, and managed **EBS volumes**
- Created and restored **EC2 Snapshots**
- Created **Custom AMIs** for backups and reuse  

**Learned about:**
- Key pairs and secure authentication
- **Security Groups vs NACLs**
- IAM roles and policies (intro only)
- Hands-on integration with Week 1 web app for **secure access and backup**

---

## ✅ Week 3 – Load Balancing and Auto Scaling
- **Deployed multiple EC2 instances** behind an **Application Load Balancer (ALB)** to evenly distribute traffic  
- Created **Launch Templates** for EC2 instances to ensure consistent configurations  
- Configured an **Auto Scaling Group (ASG)** to automatically add/remove EC2 instances based on demand  
- Set scaling policies based on **CloudWatch CPU utilization metrics** for dynamic resource allocation  
- Integrated with Week 1 quiz web app for **high availability and fault tolerance**  

**Concepts Covered:**
- Elastic Load Balancer (ELB) vs Application Load Balancer (ALB) vs Network Load Balancer (NLB)  
- Health checks and traffic distribution  
- Launch Templates vs Launch Configurations  
- Auto Scaling Groups and scaling policies  
- CloudWatch alarms for scaling triggers  

---

## ✅ Week 4 – Monitoring, Automation, and Full Deployment
- Configured **CloudWatch Dashboards** to monitor CPU, memory, and network utilization  
- Set up **CloudWatch Alarms** for proactive alerts and notifications  
- Automated EC2 configuration using **User Data scripts** for installing Apache and deploying the quiz app on boot  
- Explored **EC2 Image Builder** to automate AMI creation  
- Compared **EC2 pricing models** (On-Demand, Reserved, Spot) and identified cost-optimization strategies  
- **Final Project:** Deployed a **multi-instance, secured, auto-scaled, and monitored EC2 setup** with high availability and resilience  

**Concepts Covered:**
- CloudWatch metrics, alarms, and dashboards  
- User Data and EC2 bootstrapping automation  
- EC2 Image Builder basics  
- Cost optimization strategies (Reserved, Spot, Savings Plans)  
- Bringing everything together into a **production-ready EC2 architecture**  

---

## 📘 EC2 Overview

**Amazon EC2 (Elastic Compute Cloud)** is a foundational AWS service that provides virtual servers (instances) in the cloud. It allows you to rent and manage computing resources on demand, just like you would manage physical machines—but faster, more scalable, and cost-efficient.

### 💡 Quick Breakdown:
- **E**lastic → You can scale up or down as needed.
- **C**ompute → Provides CPU, RAM, networking, and storage.
- **C**loud → Fully virtual, accessible over the internet.

### ✅ Real-World Examples:
- Hosting websites and APIs
- Running game servers
- Big data analytics
- CI/CD and DevOps environments
- Machine learning training pipelines

---

## 🎯 What You'll Learn By Completing This Project

- Core EC2 concepts, features, and pricing models
- Secure instance access and IAM policies
- Launch and manage EBS volumes, snapshots, and AMIs
- Build fault-tolerant architectures with Load Balancers and Auto Scaling
- Monitor your EC2 resources using CloudWatch
- Deploy a full-stack, production-ready EC2 setup

---

Stay tuned — Week 3 and Week 4 updates are coming soon!

If you liked this project, feel free to ⭐ star the repo and share!


