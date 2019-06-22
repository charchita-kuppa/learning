/*
 * linkedlist.cpp
 *
 *  Created on: 28-Sep-2018
 *      Author: charchita
 */
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
using namespace std;

struct Node{
	int data;
	struct Node *Next;
};

struct Node* newNode(int new_data)
{
	struct Node *new_node=(struct Node*)malloc(sizeof(struct Node));
	new_node->data=new_data;
	new_node->Next=NULL;
	return new_node;
}
// to insert a node at the beginning//
 void insert(struct Node** head_ref,int new_data)
 {
	 struct Node *newnode1=newNode(new_data);
	 newnode1->Next=(*head_ref);
	 (*head_ref)=newnode1;
 }

 void printlist(struct Node* n)
 {
	 while(n!=NULL)
	 {
		 cout << n->data ;
		 n=n->Next;
		 if(n!=NULL)
		 cout << "->";

	 }
 }

void reverse(struct Node** llist)
{
	struct Node *prev=NULL;
	struct Node *curr=*llist;
	struct Node *next=NULL;

	while(curr!=NULL)
	{
		next=curr->Next;
		curr->Next=prev;
		prev=curr;
		curr=next;

	}
	*llist = prev;

}

 void addlist(struct Node* list1,struct Node *list2)
 {

	 struct Node *temp,*res=NULL;
	 int sum,carry =0;

	 reverse(&list1);
	 reverse(&list2);


	 while((list1 != NULL) || (list2 != NULL))
	 {
		 sum = carry + (list1 ? list1->data : 0) + (list2 ? list2->data : 0);
		 if(sum >= 10)
		 {
			 carry = 1;
			 sum = sum % 10;
		 }
		 else
		 {
			 carry = 0;
		 }
		 temp = newNode(sum);
		 if(res==NULL)
		 {
			 res=temp;
		 }
		 else
		 {
			 temp->Next=res;
			 res=temp;
		 }
		 if(list1) list1 = list1->Next;
		 if(list2) list2 = list2->Next;
	 }

	 if(carry>0)
	 {
		 temp = newNode(carry);
		 temp->Next=res;
		 res=temp;

	 }

	 cout <<"\nresultant sum is\n";
	 printlist(res);
 }
int main()
{
	struct Node *first=NULL;
	struct Node *second=NULL;
	int d1,d2,r;
	cin >> d1;
	cin >> d2;
	while(d1 != 0)
	{
		r=d1%10;
		insert(&first,r);
		d1=d1/10;
	}
	cout <<"first list is \n";
	printlist(first);
	r=0;
	while(d2 != 0)
	{
			r=d2%10;
			insert(&second,r);
			d2=d2/10;
	}
		cout <<"\nsecond list is \n";
		printlist(second);
		addlist(first,second);

}





