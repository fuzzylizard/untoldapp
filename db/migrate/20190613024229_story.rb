class Story < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title
      t.string :story_text

      t.timestamps
    end
  end
end
