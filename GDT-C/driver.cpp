#include <map>
#include <string>
#include "DirectoryTree.cpp"
#include <bits/stdc++.h>

// split the sentence into words and return vector<string>
vector<string> split(const string &sentence) {
    vector<string> words;
    string word;
    for (char i: sentence) {
        if (i == ' ') {
            words.push_back(word);
            word = "";
        } else {
            word += i;
        }
    }
    words.push_back(word);
    return words;
}

bool hasValidArgs(const vector<string> &prompt) {
    if (prompt.size() != 2) {
        cout << "Invalid number of arguments" << endl;
        return false;
    }
    return true;
}

int main() {
    auto *tree = new DirectoryTree();

    // The user menu for driver
    cout << "pwd: print working directory" << endl;
    cout << "cd <directory>: change directory" << endl;
    cout << "cd ..: move to parent directory" << endl;
    cout << "exists <directory>: check if directory exists" << endl;
    cout << "mkdir <directory>: create directory" << endl;
    cout << "rmdir <directory>: remove directory" << endl;
    cout << "countdir: count the number of directory" << endl;
    cout << "showtree: display directory tree" << endl;

    string prompt;
    do {
        cout << "command > ";
        getline(cin, prompt);

        // split the input prompt into a vector of words
        vector<string> words = split(prompt);

        if (!words.empty()) {
            string command = words.at(0);

            if (words.size() == 1) {
                if (command == "pwd") {
                    tree->pwd();
                } else if (command == "ls") {
                    tree->ls();
                } else if (command == "countdir") {
                    tree->countDir();
                } else if (command == "showtree") {
                    tree->showtree();
                } else {
                    cout << "Unknown Command." << endl;
                }
            } else if (hasValidArgs(words)) {
                // get the second argument of the prompt.
                string args = words.at(1);
                if (command == "cd") {
                    tree->cd(args);
                } else if (command == "exists") {
                    tree->exists(args);
                } else if (command == "mkdir") {
                    tree->mkdir(args);
                } else if (command == "rmdir") {
                    tree->rmdir(args);
                } else {
                    cout << "Unknown command" << endl;
                }
            } else {
                cout << "Unknown Command." << endl;
            }
        }

        cout << endl;
    } while (prompt != "quit");
}