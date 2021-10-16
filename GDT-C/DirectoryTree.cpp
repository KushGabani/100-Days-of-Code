#include <string>
#include "GTNode.cpp"
#include <bits/stdc++.h>

using namespace std;

class DirectoryTree
{
private:
    GTNode *root;
    GTNode *current;

public:
    // constructor
    DirectoryTree()
    {
        root = new GTNode("root");
        current = root;
    }

    /*
     * Time Complexity for the following implementation of "mkdir":
     * let N be the number of sub-directories in the current dir
     * then, adding a dir to a tree takes O(1) i.e. constant time complexity
     * as we keep adding the new sub-dir as the left most child of the current dir.
     */
    void mkdir(const string &newDirName)
    {
        // if current directory does not exist i.e nullptr
        if (this->current == nullptr)
        {
            createRoot(newDirName);
            return;
        }

        auto *newDir = new GTNode(newDirName);

        // add the new dir as the left most child of the current dir
        // the existing directories are modified to refer to as right siblings of this new dir
        GTNode *existing = this->current->getLeftmostChild();
        newDir->setRightSibling(existing);
        this->current->setLeftmostChild(newDir);
        newDir->setParent(this->current);
    }

    /*
     * Time Complexity for the following implementation of "createRoot":
     * creating a root of the tree takes O(1) i.e. constant time complexity
     */
    void createRoot(string rootName)
    {
        // call the GTNode constructor and pass in rootName
        // set the root to this new GTNode
        root = new GTNode(std::move(rootName));
        current = root;
    }

    /*
     * Time Complexity for the following implementation of "ls":
     * let N be the number of sub-directories in the current dir
     * then, listing each sub-dir in the current dir takes O(N) i.e. linear time complexity
     */
    void ls()
    {
        // get the left most child and keep iterating till its right sibling is null
        // while printing the name of the directory
        GTNode *child = this->current->getLeftmostChild();
        if (child != nullptr)
        {
            while (child != nullptr)
            {
                cout << child->getName() << endl;
                child = child->getRightSibling();
            }
        }
        else
        {
            // if there are no dirs in the working dir
            cout << "This directory is empty" << endl;
        }
    }

    /*
     * Time Complexity for the following implementation of "pwd":
     * time complexity: takes O(1) i.e. constant time complexity
     * as we keep track of the current node throughout and directly print its name
     */
    void pwd()
    {
        // display the name of the current dir
        cout << this->current->getName() << endl;
    }

    /*
     * Time Complexity for the following implementation of "exists":
     * let N be the number of sub-directories in the current dir
     * then, searching if a dir exists in a tree takes O(N) i.e.linear time complexity
     */
    void exists(const string &to_find)
    {
        // get the left most child and keep iterating till its right sibling is null
        // while checking if the dir of that iteration matches the searched dir
        GTNode *child = this->current->getLeftmostChild();
        while (child != nullptr)
        {
            if (child->getName() == to_find)
            {
                cout << to_find << " exists" << endl;
                return;
            }
            child = child->getRightSibling();
        }

        // if the dir does not exist
        cout << to_find << " does not exist" << endl;
    }

    /*
     * Time Complexity for the following implementation of "countdir":
     * let N be the number of sub-directories in the current dir
     * then, counting the number of dirs in a tree takes O(N) i.e.linear time complexity
     */
    void countDir()
    {
        GTNode *child = this->current->getLeftmostChild();

        // include the current dir into the count
        int count = 1;

        // iterate through the siblings while incrementing the counter
        while (child != nullptr)
        {
            child = child->getRightSibling();
            ++count;
        }
        cout << count << endl;
    }

    /*
     * Time Complexity for the following implementation of "cd":
     * let N be the number of sub-directories in the current dir
     * then,
     * (i) moving back to the parent dir operation is O(1)
     * (ii) changing to a sub dir takes O(N) i.e.linear time complexity
     */
    void cd(const string &dirName)
    {
        if (this->current == nullptr)
        {
            // if the current dir does not exist
            return;
        }
        else if (dirName == "..")
        {
            // if the command has ..
            if (current->getParent() != nullptr)
            {
                this->current = this->current->getParent();
            }
            else
            {
                // the current dir is the root dir
                cout << "already in the root directory" << endl;
            }
            return;
        }

        // iterate through the siblings of left most child
        // if dir found then set the current dir to that sibling
        GTNode *child = this->current->getLeftmostChild();
        while (child != nullptr)
        {
            if (child->getName() == dirName)
            {
                this->current = child;
                return;
            }
            child = child->getRightSibling();
        }

        // if dir does not exist
        cout << dirName << " not found";
    }

    /*
     * Time Complexity for the following implementation of "rmdir":
     * let N be the number of sub-directories in the current dir
     * then, if the dir to be deleted is
     * (i) the leftmost sibling then, the operation is O(1) time complexity.
     * (ii) any other right sibling, the operation is O(N) time complexity.
     */
    void rmdir(const string &dirName)
    {
        GTNode *child = this->current->getLeftmostChild();

        // if there is no left most child of the current dir
        if (child == nullptr)
        {
            cout << dirName << " not found";
            return;
        }

        // if the dir to delete is the left most sibling
        if (child->getName() == dirName)
        {
            if (child->getRightSibling() != nullptr)
            {
                child->getParent()->setLeftmostChild(child->getRightSibling());
            }
            else
            {
                GTNode *parent = child->getParent();
                parent->setLeftmostChild(nullptr);
            }
            return;
        }

        // if the dir to delete is any sibling of the left most sub-dir.
        GTNode *pGtNode = child;
        while (pGtNode->getRightSibling() != nullptr && pGtNode->getRightSibling()->getName() != dirName)
            pGtNode = pGtNode->getRightSibling();
        if (pGtNode->getRightSibling() == nullptr)
        {
            cout << dirName << " not found.";
        }
        else
        {
            pGtNode->setRightSibling(pGtNode->getRightSibling()->getRightSibling());
        }
    }

    /*
     * Time Complexity for the following implementation of "showtree":
     * let N be the number of sub-directories at each level
     * and M be the height of the tree
     * then, traversing the entire tree takes O(N*M) i.e. visiting each node only once.
     */
    void showtree()
    {
        if (root == nullptr)
            return;

        queue<GTNode *> track;
        track.push(root);

        // If this dir has sub-dirs
        while (!track.empty())
        {
            int n = track.size();
            while (n > 0)
            {
                // Dequeue an dir from queue and cout it
                GTNode *front = track.front();
                track.pop();
                cout << front->getName() << " ";

                // Enqueue all sub-dirs of the dequeued dir
                GTNode *temp = front->getLeftmostChild();
                if (temp != nullptr)
                {
                    track.push(temp);
                    while (temp->getRightSibling() != nullptr)
                    {
                        temp = temp->getRightSibling();
                        track.push(temp);
                    }
                }
                n--;
            }
            cout << endl;
        }
    }
};
