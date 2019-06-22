/*
 * nthnode.cpp
 *
 *  Created on: 16-Oct-2018
 *      Author: charchita
 */
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
using namespace std;

struct Node{
	int data;
	struct Node *next;
};
// to create new node
struct Node* newNode(int data)
{
	struct Node *new_node=(struct Node*)malloc(sizeof(struct Node));
	new_node->data = data;
	new_node->next = NULL;
	return new_node;
}
// to insert a node at the front//
void insert(struct Node** head_ref,int new_data)
{
	struct Node *newnode1=newNode(new_data);
	newnode1->next=(*head_ref);
	(*head_ref)=newnode1;
}
// to find nth node from last
void nthnode(struct Node* ref,int n)
{
	struct Node *headref,*nnode = NULL;
	int countHead = 1;
	int countNNode = 1;
	headref = nnode = ref;
	while(headref->next != NULL) {
		headref = headref->next;
		countHead++;
		if (countHead - countNNode ==  n ) {
			nnode = nnode->next;
			countNNode++;
		}
	}

	if(countHead < n || n <= 0){
	cout << "there is no "<< n << " in the list";
	}
	else{
		cout << "the " << n <<" node from last is "<< nnode->data;
	}
}
// to print list
void printlist(struct Node* list)
{
	while(list!=NULL)
	{
		cout << list->data ;
		list=list->next;
		if(list!=NULL)
			cout << "->";
	}
}

int main()
{
	struct Node *first=NULL;
	int d1,r,n;
	cin >> d1;
	while(d1 != 0)
	{
		r=d1%10;
		insert(&first,r);
		d1=d1/10;
	}
	cout <<"first list is \n";
	printlist(first);
	cout << "\n nth to last";
	cin >> n;
	nthnode(first,n);

}
