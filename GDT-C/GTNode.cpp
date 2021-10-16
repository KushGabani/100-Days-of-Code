#include <string>
#include <utility>

using namespace std;

class GTNode {

	private:
		string name;
		GTNode* leftmostChild;
		GTNode* rightSibling;
		GTNode* parent;

	public:
		// constructor + getters and setters name, leftmostChild, rightSibling, and parent
		GTNode(string name, GTNode* leftmostChild, GTNode* rightSibling, GTNode* parent) {
			this->name = std::move(name);
			this->leftmostChild = leftmostChild;
			this->rightSibling = rightSibling;
			this->parent = parent;
		}

		explicit GTNode(string name) {
			this->name = std::move(name);
			this->leftmostChild = nullptr;
			this->rightSibling = nullptr;
			this->parent = nullptr;
		}
		
		string getName() {
			return name;
		}

		GTNode* getLeftmostChild() {
			return leftmostChild;
		}

		GTNode* getRightSibling() {
			return rightSibling;
		}

		GTNode* getParent() {
			return parent;
		}

		void setLeftmostChild(GTNode* leftChild) {
			this->leftmostChild = leftChild;
		}

		void setRightSibling(GTNode* sibling) {
			this->rightSibling = sibling;
		}

		void setParent(GTNode* p) {
			this->parent = p;
		}
};
