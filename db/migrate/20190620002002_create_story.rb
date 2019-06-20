class CreateStory < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title
      t.text :story_text

      t.timestamps
    end
  end
end
