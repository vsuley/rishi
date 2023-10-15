# Scenarios for Rishi

## Overall Usage Philosophy

The assumption is that knowledge entry is an urgent and rapid task, whereas knowledge retrieval is a more leisurely and deliberate task. Therefore, knowledge entry tasks should be optimized for speed and convenience, whereas knowledge retrieval tasks should be optimized for flexibility and power.

## Data Model

### Nodes

The concept of nodes is mostly obvious so I won't go into detail here. Rishi will use a few different types of nodes that are detailed below.

#### Tags

Tags are nodes that are used to organize knowledge nodes. Tags will only be used to describe nodes, not relationships. Tags will be unique at a global level.

#### Knowledge Nodes

These nodes represent entities that act as subjects or objects of "knowledge". Most nouns would fall into this category. They will be unique at a global level, so their name could, in effect, act like an ID. Context specific knowledge will be handled by the combined use of tags and relationships. For instance, let's consider CO2. Some valid contexts would be climate, fire exginguishing, carbonated water, aquascaping etc. Sub-graphs for all these domains will refer to the very same instance of CO2, but they will have different relationships as they connect to that node, which define CO2's role in that particular context. This way, the knowledge graph will be able to represent the fact that CO2 is a greenhouse gas, a fire extinguishing agent, a component of carbonated water and a nutrient for plants. This interconnection of contexts is what makes the knowledge graph powerful.

### Relationships

Relationships are the core of the knowledge graph. They are the edges that connect nodes. Some characteristics of relationships:

- A relationship must have two and only two node endpoints.
- A relationship must have one and only one type.
- A relationship must have at least one context.
- A relationship can be bi-directional or uni-directional.

A note for the astute, the way we are designing this, one could draw another rendition of the knowledege graph where our relationships get converted into nodes, the "contexts" they are associated with turned into those nodes' tags and we get a new but equivalent graph that just has a lot of nodes and flat relationships. The flat graph would be harder to read and intuit, so we will stick with having contextual relationships.

### Paths

Paths are sequences of relationships that connect nodes. While relationships also help to connect nodes, they do not help maintain a sequence, and that is the value paths bring. Paths are used to represent processes, workflows, recipes, formulations and other sequences of entities.

### Contexts

Contexts act like domains in which the knowledge graph exists. They are used to organize the knowledge graph and to provide a way to search for relationships. They will function much like namespaces in a programming language, except that they are not exclusive. A relationship can have multiple contexts. Contexts are also used to provide a way to filter the knowledge graph. When a context is selected, only relationships that are associated with that context will be shown.

### Thoughts on Contexts vs Tags

Context and tag seem very similar for now, but I think they are fundamentally different and I want to keep them as separate concepts. In some ways tags are to nodes what context is to relationship, but not _precisely_. A node is usually an _instance of_ its tag, whereas relationships _belong to_ a context.

## UI Fundamentals

### Navigation

- _Tab_ will move the focus to the next item in the current view or start from the top if there is no next item.
- _Enter_ will exit or enter the edit state for a selected field.
- _Escape_ will exit the edit state for a selected field. If no field is being edited then it will exit the current view without saving changes.
- _Command + Enter_ will save changes and exit the current view.

## Knowledge Entry

### Quick node creation

The point of node entry is to capture the existence of a certain entity. Relationships to other nodes should be possible to add quickly, but not required.

#### Mandatory fields

- Title (single, globally unique)

#### Optional fields

- Set of Tags (multiple, globally unique)
- Description (single, no constraint on uniqueness)
- Set of Relationship - Endpoint tuples (multiple, unique for given endpoints)

### Quick relationship creation

The point of relationship entry is to capture the existence of a certain relationship between two entities. The entities themselves should be possible to add quickly, but not required.
